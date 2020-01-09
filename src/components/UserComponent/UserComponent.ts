import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import users from '@/store/modules/users'
import { User, Post } from '@/Model/model';
import HeaderComponent from 'header-bell';

@Component({
  components: { HeaderComponent }
})
export class HomeComponent extends Vue {
  users: Array<User> | [] = [];
  displayUser: User | null = null;
  posts: Array<Post> | [] = [];
  modalData: Post = <Post>{};
  headers: any[] = [];

  constructor() {
    super();
    this.headers = [{
      id: '1',
      url: '#',
      name: 'User'
    },
    {
      id: '2',
      url: '#',
      name: 'User2'
    }
  ]
    // this.modalData['title'] = '';
  }

  async created() {
    await users.Users();
    this.users = users.users || []
  }

  updateUser(user: User) {
    this.displayUser = user;
    this.posts = [];
  }

  async showUserPosts(id: number) {
    await users.Posts(id);
    this.posts = users.posts
  }

  getPostData(post: Post) {
    this.modalData = {...post};
  }

  async updatePost(post: Post) {
    try {
      await users.PostUpdate(post);
      const updatePostData: Post = users.post as Post;
      const index = this.posts.findIndex((el) => (el.userId === updatePostData.userId) && (el.id === updatePostData.id))
      if (index >= 0) {
        this.$set(this.posts, index, updatePostData);
      }
    } catch {
      console.log('error logged');
    }
  }

  @Watch('posts', {deep: true})
  postRender() {
    this.posts = this.posts;
  }

}