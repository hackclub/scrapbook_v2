import { Private, Router, Route, Set } from '@redwoodjs/router'
import MainLayout from 'src/layouts/MainLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={MainLayout}>
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/" page={HomePage} name="home" />

        // Auth
        <Route path="/login" page={LoginPage} name="login" />
        <Route path="/signup" page={SignupPage} name="signup" />
        <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
        <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />

        // Posts
        <Route path="/share" page={PostNewPostPage} name="newPost" />
        <Route path="/{username:String}/{id:Int}" page={PostPostPage} name="post" />
        <Route path="/{username:String}" page={PostPostsPage} name="posts" />

        // <Private unauthenticated="home">
          <Route path="/{id:Int}/edit" page={PostEditPostPage} name="editPost" />
        // </Private>
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
