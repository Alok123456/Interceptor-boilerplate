<template>
  <div>
    <div><HeaderComponent></HeaderComponent></div>
    <div class="user-list-dp uk-inline uk-align-right">
      <button class="uk-button uk-button-default" type="button">Users List</button>
      <div uk-dropdown="mode: click">
        <ul class="uk-nav uk-dropdown-nav" style="display:flex; flex-direction: column">
          <li v-if="!users.length">No User available yet</li>
          <li v-for="user in users" v-bind:key="user.id" class="uk-active">
            <a @click="updateUser(user)">{{user.name}}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="uk-section uk-section-muted uk-preserve-color">
      <div class="uk-container" style="margin-top: 30px;">
        <div v-if="displayUser" class="uk-grid-match uk-child-width-expand@m" uk-grid>
          <div>
            <div class="uk-card uk-card-default uk-card-body">
              <article class="uk-comment ">
                <header class="uk-comment-header uk-grid-medium uk-flex-middle" uk-grid>
                  <div class="uk-width-expand">
                    <h4 class="uk-comment-title uk-margin-remove">
                      <a class="uk-link-reset">{{displayUser.name}}</a>
                    </h4>
                  </div>
                </header>
                <div class="uk-align-left">
                    <p><b>UserName:</b> {{displayUser.username}}</p>
                    <p><b>Email:</b> {{displayUser.email}}</p>
                    <p><b>Phone No.:</b> {{displayUser.phone}}</p>
                    <p><a @click="showUserPosts(displayUser.id)">Show Posts</a></p>
                </div>
              </article>
            </div>
          </div>
        </div>

        <hr class="uk-divider-icon" />

        <div class="uk-grid-match uk-child-width-expand@m" uk-grid v-if="posts.length">
          <div>
            <div class="uk-card uk-card-default uk-card-body">
              <div class="uk-overflow-auto">
          <table class="uk-table uk-table-divider" >
            <thead>
              <tr>
                  <th class="uk-table-small"><strong>UserId</strong></th>
                  <th class="uk-width-medium"><strong>Title</strong></th>
                  <th class="uk-width-expand"><strong>Body</strong></th>
                  <th class="uk-width-medium"><strong>Action</strong></th>
              </tr>
            </thead>
          <tbody>
              <!-- <tr>
                  <td><input class="uk-input uk-width-auto" type="text" placeholder="Items" v-model="itemModel.name"></td>
                  <td><input class="uk-input uk-width-auto" type="text" placeholder="Amount" v-model="itemModel.expense"></td>
                  <td><button class="uk-button uk-button-primary" type="button" @click="emitCategItems">Add</button></td>
              </tr> -->
              <tr v-for="post in posts" v-bind:key="post.id">
                  <td>{{ post.userId }}</td>
                  <td>{{ post.title }}</td>
                  <td>{{ post.body }}</td>
                  <td class="post-action">
                    <!-- <a class="uk-button uk-button-default" >Edit</a>  -->
                    <button class="uk-button uk-button-primary" href="#modal-overflow" uk-toggle type="button" @click="getPostData(post)">Edit</button>
                    <button class="uk-button uk-button-secondary" type="button">Delete</button>

                  </td>
              </tr>
          </tbody>
      </table>
      </div>
            </div>
          </div>
        </div>
      </div>
    </div>

        <div id="modal-overflow" uk-modal>
          <div class="uk-modal-dialog">
            <button class="uk-modal-close-default " type="button" uk-close></button>
            <div class="uk-modal-header">
              <h2 class="uk-modal-title">Edit Post</h2>
            </div>
            <div class="uk-modal-body" uk-overflow-auto>
              <div class="uk-margin">
                <input class="uk-input uk-width-auto" type="text" placeholder="Title" v-model="modalData.title">
              </div>
              <div class="uk-margin">
                <textarea class="uk-textarea" rows="5" placeholder="Textarea" v-model="modalData.body"></textarea>
              </div>
            </div>
            <div class="uk-modal-footer uk-text-right ">
              <button class="uk-button uk-button-default uk-modal-close" type="button" >Cancel</button>
              <button class="uk-button uk-button-primary uk-modal-close" type="button" @click="updatePost(modalData)">Save</button>
            </div>
        </div>
</div>
  </div>
</template>

<script>
import { HomeComponent } from "./UserComponent";
export default HomeComponent; 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.user-list-dp {
  margin-top: 15px;
  margin-right: 30px;
  margin-bottom: 15px;
}

.post-action {
  display: flex;
}

.post-action button{
  margin: 5px;
}

.uk-modal-footer button {
  margin: 5px;
}

.uk-table th {
  text-align: center;
}
</style>
