import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/createPost.dto';
import { Post } from './post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post) private postRepository: Repository<Post>,
    private userService: UsersService,
  ) {}

  async createPost(post: CreatePostDto) {
    const userFound = await this.userService.getUser(post.authorId);

    if (!userFound) {
      return new HttpException('User not found ', HttpStatus.NOT_FOUND);
    }

    const newPost = this.postRepository.create(post);
    return this.postRepository.save(newPost);
  }
  getPost() {}
}
