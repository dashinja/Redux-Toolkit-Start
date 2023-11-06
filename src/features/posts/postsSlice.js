import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', title: 'First Post!', content: 'Hello!' },
  { id: '2', title: 'Second Post', content: 'More text' }
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded(state, action) {
      // Uses Immer library inside of the 'createSlice' function by default so the `.push` here is actually immutable, though normally it is NOT
      state.push(action.payload)
    },
    postUpdated(state, action) {
      // though we made this first, we anticipate what we'll need, and what we'll actually add in the payloads we make for this particular action to be handled by this particular reducer
      const { id, title, content } = action.payload
      const existingPost = state.find(post => post.id === id)
      if (existingPost) {
        existingPost.title = title
        existingPost.content = content
      }
    }
  }
})

export const { postAdded, postUpdated } = postsSlice.actions
export default postsSlice.reducer