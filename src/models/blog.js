import mongoose from 'mongoose'

const BlogSchema = new mongoose.Schema({
  title: String,
  description: String,
  likes: Number,
  author: String,
})

const Blog = mongoose.model.Blog || mongoose.model('Blog', BlogSchema)
export default Blog
