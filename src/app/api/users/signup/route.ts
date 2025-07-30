import { dbConnect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import bcryptjs from 'bcryptjs';
import { NextResponse,NextRequest } from "next/server";

dbConnect();

export async function POST(request:NextRequest){
    try {
        const reqBody = await request.json()
        const {username,email,password} = reqBody

        console.log(reqBody);

        // check if user already exist
        const user = await User.findOne({email})
        if(user) return NextResponse.json({error:"User already exist"},{status:400})

        // hash password
        const salt = await bcryptjs.genSalt(10);
        const hashPassword = await bcryptjs.hash(password,salt); 
        // save to database
        const newUser = new User({
            username,
            email,
            password:hashPassword
        })

        const savedUser = await newUser.save()
        console.log(savedUser);

        return NextResponse.json({message:"User register successfully",
            success:true,
            savedUser
        },
        {status:200})

    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:500})
    }
}