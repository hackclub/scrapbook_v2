import { Link, navigate, routes } from '@redwoodjs/router'
import { useRef } from 'react'
import {
  Form,
  Label,
  TextField,
  PasswordField,
  Submit,
  FieldError,
} from '@redwoodjs/forms'
import { useAuth } from '@redwoodjs/auth'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'
import { useEffect } from 'react'

const LoginPage = () => {
  const { isAuthenticated, logIn } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  const usernameRef = useRef()
  useEffect(() => {
    usernameRef.current.focus()
  }, [])

  const onSubmit = async (data) => {
    await logIn({ ...data })
  }

  return (
    <>
      <MetaTags title="Login" />
      <div>
        <div>
          <header>
            <h2>Login</h2>
          </header>

          <div>
            <Form onSubmit={onSubmit}>
              <Label>Email</Label>
              <TextField name="username" ref={usernameRef} />

              <Label>Password</Label>
              <PasswordField name="password" />

              <div>
                <Link to={routes.forgotPassword()}>
                  Forgot Password?
                </Link>
              </div>
              <div>
                <Submit>Login</Submit>
              </div>
            </Form>
          </div>
        </div>
        <div>
          <span>Don't have an account?</span>
          <Link to={routes.signup()}>
            Sign up!
          </Link>
        </div>
      </div>
    </>
  )
}

export default LoginPage
