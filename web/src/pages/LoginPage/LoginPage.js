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
    const response = await logIn({ ...data })

    if (response.message) {
      console.log(response.message)
    } else if (response.error) {
      console.log(response.error)
    }
  }

  return (
    <>
      <MetaTags title="Login" />

      <header>
        <h2>Login</h2>
      </header>

      <div>
        <Form onSubmit={onSubmit}>
          <Label name="username">Email</Label>
          <TextField
            name="username"
            ref={usernameRef}
            validation={{
              required: {
                value: true,
                message: "Email is required",
              },
            }}
          />

          <FieldError name="username" />

          <Label name="password">Password</Label>
          <PasswordField
            name="password"
            validation={{
              required: {
                value: true,
                message: "Password is required",
              },
            }}
          />

          <FieldError name="password" />

          <div>
            <Link to={routes.forgotPassword()}>Forgot Password?</Link>
          </div>

          <Submit>Login</Submit>
        </Form>
      </div>

      <div>
        <span>Don't have an account?</span>{' '}
        <Link to={routes.signup()}>Sign up!</Link>
      </div>
    </>
  )
}

export default LoginPage
