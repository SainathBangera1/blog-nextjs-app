import connectToDB from '@/database'
import Blog from '@/models/blog'
import { NextResponse } from 'next/server'

const AddNewBlog = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  likes: Joi.number().required(),
})

export async function POST(req) {
  try {
    await connectToDB()
    const extractBlogData = await req.json()
    const { title, description, likes, author } = extractBlogData

    const { error } = AddNewBlog.validate(extractBlogData)
    if (error) {
      return NextResponse.json({
        success: false,
        message: error.message,
      })
    }

    const newlyAddedBlog = await Blog.create(extractBlogData)
    if (newlyAddedBlog) {
      return NextResponse.json({
        success: true,
        message: 'Blog added successfully',
      })
    } else {
      return NextResponse.json({
        success: false,
        message: 'Failed to add blog',
      })
    }
  } catch (error) {
    console.log(error)
    return NextResponse.json({
      success: false,
      message: 'Something went wrong',
    })
  }
}
