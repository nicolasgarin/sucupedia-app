import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { SucuForm } from './sucuForm'
import { getSucu } from '../sucus.api'

type Props = {
    params: {
        id: number
    }
}

async function NewSucusPage({params}:Props) {
    const sucu = await getSucu(params.id)
  return (
    <div className='h-screen flex justify-center items-center'>
        <Card>
            <CardHeader>
                <CardTitle>
                   {params.id ? "Edit sucu" : "Register sucu"}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <SucuForm sucu={sucu} />
            </CardContent>
        </Card>
    </div>
  )
}

export default NewSucusPage