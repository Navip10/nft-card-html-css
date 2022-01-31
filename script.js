// let newNFT = {
//     bgColor: 'blue',
//     name: 'dog',
//     owner: 'Lance'
// }
// document.getElementById('owner').innerText = newNFT.owner
// document.body.style.backgroundColor = newNFT.bgColor

//HW change ur nft to all this info below
let dog = {
    name: "Shibe #5079",
    price: "0.09ETH",
    description: "Shiba Shelter is a collection of shibes on the Ethereum Blockchain",
    nft: "https://lh3.googleusercontent.com/BLAw9VE-D5PyYfu7u_KbxBIrl_j5jI8I4UAt8H-qTGRZ4FBaFWNKb0HHP5Uk1shKvmC5LGpfi1ivK8G2BDuZOE30TVS8J8W-WngOyIE=w600",
    backgroundColor: "#00FFFF",
    cardColor: "#FFC579",
    otherData: {
        owner: "Lance Toledo",
        daysLeft: "1 day left",
        profileImg: "https://lh3.googleusercontent.com/a-/AOh14GiBv7fSEkk1Kr_3jpQfHTuEHh6V1ehFsg_sLNg0=s40-c",
    }
}
//document.getElementsByClassName("container")[0].style.backgroundColor = dog.cardColor
// document.getElementById("btn").addEventListener("click", function (){
//  document.getElementById("NFT").src = "https://lh3.googleusercontent.com/BLAw9VE-D5PyYfu7u_KbxBIrl_j5jI8I4UAt8H-qTGRZ4FBaFWNKb0HHP5Uk1shKvmC5LGpfi1ivK8G2BDuZOE30TVS8J8W-WngOyIE=w600"
// })

// document.getElementById("btn").addEventListener("click", function (){
//     document.getElementById("NFT").src = "https://lh3.googleusercontent.com/BLAw9VE-D5PyYfu7u_KbxBIrl_j5jI8I4UAt8H-qTGRZ4FBaFWNKb0HHP5Uk1shKvmC5LGpfi1ivK8G2BDuZOE30TVS8J8W-WngOyIE=w600"
// })


document.getElementById("btn").addEventListener("click", function (){
    

    if(document.getElementById("name").innerText == "Cheeky Lion #5229"){
        console.log("name switch")
        document.getElementById("name").innerText = dog.name

        console.log("description switch")
        document.getElementById("descrip").innerText = dog.description,
        document.getElementById("descrip").style.color = "black"

        console.log("price change")
        document.getElementById("cost").innerText = dog.price
        document.getElementById("cost").style.color = "white"

        console.log("time change")
        document.getElementById("time").innerText = dog.otherData.daysLeft

        console.log("creator change")
        document.getElementById("owner").innerText = dog.otherData.owner

        console.log("profile pic change")
        document.getElementById("proPic").src = dog.otherData.profileImg

        console.log("bg color change")
        document.getElementsByClassName("container")[0].style.backgroundColor = dog.cardColor

        console.log("name color change")
        document.getElementById("name").style.color = "white"

        console.log("nft img change")
        document.getElementById("NFT").src = "https://lh3.googleusercontent.com/BLAw9VE-D5PyYfu7u_KbxBIrl_j5jI8I4UAt8H-qTGRZ4FBaFWNKb0HHP5Uk1shKvmC5LGpfi1ivK8G2BDuZOE30TVS8J8W-WngOyIE=w600"
        
        console.log("body bg-color change")
        document.body.style.backgroundColor = dog.backgroundColor
    }
    

    else{
        console.log("back to cheeky Lion")
        document.getElementById("name").innerText = "Cheeky Lion #5229"
        
       

         console.log("back to og description")
         document.getElementById("descrip").innerText= "The Cheeky Lion Club are the official breeding partners of The Cheeky Cougar Club. They are a private collection of 8,000 Cheeky Lion NFT's."
         document.getElementById("descrip").style.color = "white"

         console.log("back to og price")
         document.getElementById("cost").innerText= "0.039ETH"
         document.getElementById("cost").style.color = "turquoise"
         
         console.log("back to og time")
         document.getElementById("time").innerText= "Feb 26, 22"

         console.log("back to og creator")
         document.getElementById("owner").innerText= "Navier Polanco"

         console.log("back to og profile pic")
         document.getElementById("proPic").src= "https://media-exp1.licdn.com/dms/image/C4E03AQFQ3GgO_Y4RNQ/profile-displayphoto-shrink_800_800/0/1570165196690?e=1648684800&v=beta&t=ZIeH4IDk02ZHoUnLUhooHCkHtDvWv2TKi4kxpVyCcY8"
        
         console.log("back to og bg color")
         document.getElementsByClassName("container")[0].style.backgroundColor= "#F24236"
         document.getElementById("name").style.color = "gold"

         console.log("back to og nft img")
         document.getElementById("NFT").src = "https://lh3.googleusercontent.com/2IUAwmNSFmo0cmx7F38VUJp5smW3b42JvIV_coxh0sA1I16cKvTUXQN9L8lX4iksxQrIOfRkA8Q9n2l_tMTMAK1mTQU72Ax3UaoZ_bo=w600" 
    
         document.body.style.backgroundColor = "hsl(217,54%, 11%)"
    }
})
    


 
   


