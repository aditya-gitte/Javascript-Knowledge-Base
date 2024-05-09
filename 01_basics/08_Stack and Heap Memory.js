let name="aditya"
let name2=name

name2="kalita"
//name will store aditya and name2 will store Kalita because when we say name2 = name a new copy of name is created and hence the original name is not changed. both name and name2 exist in the stack memory

user1={
    email: "adinandji@gmail.com",
    name: "personal"
}

user2=user1

user2.email="adityagitte.dev@gmail.com"

//user 1 and user2 both exist in the heap memory
// therefore when the user2 is updated the changes are also translated to user1 


