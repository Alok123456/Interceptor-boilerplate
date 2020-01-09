import { httpClient } from '../Common/httpClient';
import { User, Post } from '@/Model/model';
const USER_END_POINT = '/users';
const POST_END_POINT = '/posts'

export async function getAllUsers(): Promise<Array<User>> {
    const response = await httpClient.get(USER_END_POINT)
    return response.data as Array<User>;
}

export async function userPosts(userId: number): Promise<Array<Post>> {
    const response = await httpClient.get(POST_END_POINT, {
        params: { userId }
    })
    return response.data as Array<Post>;
}

export async function updatePost(postDt: Post): Promise<Post> {
    const response = await httpClient.put(POST_END_POINT + '/' + postDt.id, postDt)
    return response.data as Post;
}