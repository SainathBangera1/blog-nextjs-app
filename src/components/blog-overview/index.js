'use client'
import { Button } from '../ui/button'
import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Fragment } from 'react'

function BlogOverview() {
  const [openDialogBox, setOpenDialogBox] = useState(false)

  return (
    <Fragment>
      <div className='min-h-screen flex flex-col justify-start items-start p-6  bg-gradient-to-r from-green-400 to-blue-500'>
        <Button onClick={() => setOpenDialogBox(true)} className='mt-5'>
          Add new Blog
        </Button>
        <Button className='mt-5'>List of Blogs</Button>
      </div>
      <Dialog open={openDialogBox} onOpenChange={setOpenDialogBox}>
        <DialogContent className='sm:max-w-[425px]'>
          <DialogHeader>
            <DialogTitle>Add New Blog</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className='grid gap-4 py-4'>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='title' className='text-right'>
                Title
              </Label>
              <Input id='title' value='Pedro Duarte' className='col-span-3' />
            </div>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='description' className='text-right'>
                Description
              </Label>
              <Input
                id='description'
                value='@peduarte'
                className='col-span-3'
              />
            </div>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='author' className='text-right'>
                Author
              </Label>
              <Input id='author' value='@peduarte' className='col-span-3' />
            </div>
          </div>
          <DialogFooter>
            <Button type='button'>Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Fragment>
  )
}
export default BlogOverview
