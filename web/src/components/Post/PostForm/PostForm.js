import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

const PostForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.post?.id)
  }

  return (
    <div>
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError error={props.error} />
        <Label name="body">
          Body
        </Label>

        <TextField
          name="body"
          defaultValue={props.post?.body}
          validation={{ required: true }}
        />

        <FieldError name="body" />

        <div>
          <Submit disabled={props.loading}>
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default PostForm
