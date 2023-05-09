import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import teacherService from './teacherService'

const initialState = {
  teachers: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}


export const createTeacher = createAsyncThunk(
  'teachers/create',
  async (teacherData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await teacherService.createTeacher(teacherData, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Get user teachers
export const getTeachers = createAsyncThunk(
  'teachers/getAll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await teacherService.getTeachers(token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Delete user teacher
export const deleteTeacher = createAsyncThunk(
  'teachers/delete',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await teacherService.deleteTeacher(id, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const teacherSlice = createSlice({
  name: 'teacher',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createTeacher.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createTeacher.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.teachers.push(action.payload)
      })
      .addCase(createTeacher.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getTeachers.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getTeachers.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.teachers = action.payload
      })
      .addCase(getTeachers.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteTeacher.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteTeacher.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.teachers = state.teachers.filter(
          (teacher) => teacher._id !== action.payload.id
        )
      })
      .addCase(deleteTeacher.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = teacherSlice.actions
export default teacherSlice.reducer
