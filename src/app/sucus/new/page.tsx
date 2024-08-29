import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

function NewSucusPage() {
  return (
    <div className='h-screen flex justify-center items-center'>
        <Card>
            <CardHeader>
                <CardTitle>
                    Register sucu
                </CardTitle>
            </CardHeader>
            <CardContent>
                <form>
                    <Label>Sucu name</Label>
                    <Input/>
                    <Label>Sucu description</Label>
                    <Input/>
                    <Label>Sucu name</Label>
                    <Input />

                    <Button>Register sucu</Button>
                </form>
            </CardContent>
        </Card>
    </div>
  )
}

export default NewSucusPage