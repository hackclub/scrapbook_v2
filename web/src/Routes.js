import { Router, Route, Set } from '@redwoodjs/router'
import MainLayout from 'src/layouts/MainLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={MainLayout}>
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/" page={HomePage} name="home" />

        // Posts
        <Route path="/share" page={PostNewPostPage} name="newPost" />
        <Route path="/{id:Int}/edit" page={PostEditPostPage} name="editPost" />
        <Route path="/{username:String}/{id:Int}" page={PostPostPage} name="post" />
        <Route path="/{username:String}" page={PostPostsPage} name="posts" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
