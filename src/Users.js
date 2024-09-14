const users = [
    {
      "id": 1,
      "username": "fashionista_123",
      "fullName": "Jessica Miles",
      "profilePicture": "https://plus.unsplash.com/premium_photo-1663050935625-108bf0ed9748?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "bio": "Fashion lover | Blogger | Designer",
      "followers": 15000,
      "following": 350,
      "posts": 120,
      "isVerified": true,
      "isPrivate": false
    },
    {
      "id": 2,
      "username": "travel_with_john",
      "fullName": "John Parker",
      "profilePicture": "https://media.istockphoto.com/id/664672204/photo/cheerful-alternative-woman.webp?a=1&b=1&s=612x612&w=0&k=20&c=OQtbyzwsLICdcGmWJt9poaHHJFvQbLTMFmvwuXvUlQQ=",
      "bio": "Travel vlogs | Wanderlust",
      "followers": 8700,
      "following": 420,
      "posts": 89,
      "isVerified": false,
      "isPrivate": false
    },
    {
      "id": 3,
      "username": "chef_emma",
      "fullName": "Emma Thompson",
      "profilePicture": "https://plus.unsplash.com/premium_photo-1664298280363-51c8881ce9ba?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGluc3RhZ3JhbSUyMHByb2ZpbGUlMjBnZW50cyUyMGFuZCUyMGxhZGllc3xlbnwwfHwwfHx8MA%3D%3D",
      "bio": "Foodie | Chef | Sharing recipes",
      "followers": 23400,
      "following": 250,
      "posts": 320,
      "isVerified": true,
      "isPrivate": true
    },
    {
      "id": 4,
      "username": "tech_geek_98",
      "fullName": "Mike Johnson",
      "profilePicture": "https://plus.unsplash.com/premium_photo-1661493868431-2622a25ccc0f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGluc3RhZ3JhbSUyMHByb2ZpbGUlMjBnZW50cyUyMGFuZCUyMGxhZGllc3xlbnwwfHwwfHx8MA%3D%3D",
      "bio": "Tech enthusiast | Gadget reviews",
      "followers": 4500,
      "following": 180,
      "posts": 65,
      "isVerified": false,
      "isPrivate": false
    },
    {
      "id": 5,
      "username": "fit_maria",
      "fullName": "Maria Garcia",
      "profilePicture": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGluc3RhZ3JhbSUyMHByb2ZpbGUlMjBnZW50cyUyMGFuZCUyMGxhZGllc3xlbnwwfHwwfHx8MA%3D%3D",
      "bio": "Fitness | Health tips | Daily workouts",
      "followers": 12500,
      "following": 300,
      "posts": 220,
      "isVerified": true,
      "isPrivate": false
    },
    {
      "id": 6,
      "username": "artlover_77",
      "fullName": "Chris Davis",
      "profilePicture": "https://media.istockphoto.com/id/650856374/photo/hispanic-high-school-student-in-study-group.webp?a=1&b=1&s=612x612&w=0&k=20&c=zCSQK28BhsSRrPU6kNSXYRejHUnHHddzkn60vgghuZQ=",
      "bio": "Artist | Painter | Sculptor",
      "followers": 6700,
      "following": 190,
      "posts": 140,
      "isVerified": false,
      "isPrivate": true
    },
    {
      "id": 7,
      "username": "pet_world",
      "fullName": "Lily Evans",
      "profilePicture": "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGluc3RhZ3JhbSUyMHByb2ZpbGUlMjBib3lzJTIwYW5kJTIwZ2lybHN8ZW58MHx8MHx8fDA%3D",
      "bio": "Pet lover | Animal rescue volunteer",
      "followers": 22000,
      "following": 410,
      "posts": 145,
      "isVerified": true,
      "isPrivate": false
    },
    {
      "id": 8,
      "username": "gamingpro_94",
      "fullName": "Alex Turner",
      "profilePicture": "https://images.unsplash.com/photo-1555421689-3f034debb7a6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW5zdGFncmFtJTIwcHJvZmlsZSUyMGdpcmxzfGVufDB8fDB8fHww",
      "bio": "Gaming streamer | Reviews & tips",
      "followers": 17800,
      "following": 320,
      "posts": 200,
      "isVerified": true,
      "isPrivate": false
    },
    {
      "id": 9,
      "username": "yoga_life",
      "fullName": "Priya Sharma",
      "profilePicture": "https://images.unsplash.com/photo-1588371995259-c69a24964e5d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW5zdGFncmFtJTIwcHJvZmlsZSUyMGdpcmxzfGVufDB8fDB8fHww",
      "bio": "Yoga instructor | Mindfulness coach",
      "followers": 9500,
      "following": 270,
      "posts": 100,
      "isVerified": false,
      "isPrivate": false
    },
    {
      "id": 10,
      "username": "car_enthusiast",
      "fullName": "David Lee",
      "profilePicture": "https://media.istockphoto.com/id/1817047415/photo/home-father-and-girl-with-a-smile-selfie-and-hug-with-social-media-family-and-loving-together.webp?a=1&b=1&s=612x612&w=0&k=20&c=cR5HaN5mAwcmiBNTYKyKkdMTE7ZF2Lb_14aOm1cpwAY=",
      "bio": "Car reviews | Custom builds | Motorsports",
      "followers": 12700,
      "following": 350,
      "posts": 180,
      "isVerified": false,
      "isPrivate": true
    }
  ]
 
  export default users