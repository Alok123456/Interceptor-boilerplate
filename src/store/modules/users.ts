import { getAllUsers, userPosts, updatePost } from '../../Services/UserService/users-api';
import { Inject } from "inversify-props";
import store from '@/store';
import { getModule, Module, VuexModule, MutationAction } from 'vuex-module-decorators'
import { User, Post } from '@/Model/model';

@Module({
    namespaced: true,
    name: 'users',
    store,
    dynamic: true
})
class UsersModule extends VuexModule {
    users: Array<User> = new Array<User>();
    posts: Array<Post> = new Array<Post>();
    post: Post | null = null;

    get getUsers() {
        return this.users;
    }

    get getPosts() {
        return this.posts;
    }

    @MutationAction
    async Users() {
        const users = await getAllUsers();
        return {users};
    };

    @MutationAction
    async Posts(userId: number) {
        const posts = await userPosts(userId);
        return {posts};
    };

    @MutationAction
    async PostUpdate(postDetails: Post) {
        const updatedPost = await updatePost(postDetails);
        return { post: updatedPost}
    }

}

export default getModule(UsersModule);
