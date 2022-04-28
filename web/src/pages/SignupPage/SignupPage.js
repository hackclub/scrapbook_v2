import { Link, navigate, routes } from '@redwoodjs/router'
import { useRef } from 'react'
import {
  Form,
  Label,
  TextField,
  PasswordField,
  FieldError,
  Submit,
} from '@redwoodjs/forms'
import { useAuth } from '@redwoodjs/auth'
import { MetaTags } from '@redwoodjs/web'
import { useEffect } from 'react'

const SignupPage = () => {
  const { isAuthenticated, signUp } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  // focus on email box on page load
  const usernameRef = useRef()
  useEffect(() => {
    usernameRef.current.focus()
  }, [])

  const onSubmit = async (data) => {
    const response = await signUp({ ...data })

    if (response.message) {
      console.log(response.message)
    } else if (response.error) {
      console.log(response.error)
    }
  }

  return (
    <>
      <MetaTags title="Signup" />

      <header>
        <h2>Signup</h2>
      </header>

      <div>
        <div>
          <Form onSubmit={onSubmit}>
            <Label name="username">Email</Label>
            <TextField name="username" ref={usernameRef}
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
              <Submit>Sign Up</Submit>
            </div>
          </Form>
        </div>
      </div>

      <div  >
        <span>Already have an account?</span>{' '}
        <Link to={routes.login()}>
          Log in!
        </Link>
      </div>
    </>
  )
}

export default SignupPage
