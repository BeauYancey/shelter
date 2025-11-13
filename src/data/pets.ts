import type { Pet } from "../types/Pet";

export const pets: Pet[] = [
  {
    id: 89553,
    name: "Crash",
    species: "dog",
    breed: "Border Collie Mix",
    age: 5,
    sex: "male",
    weight: 45,
    intakeDate: new Date(2025, 6, 7),
    description: "Crash is an active pup and would thrive in a home that can match his playful spirit. He's done great on car rides and has been a champ at the groomer's too! Even better Crash's adoption fee has been fully sponsored! Come by and meet this sweet boy today. He might just be the perfect fit for your family!",
    adoptionFee: 0,
    photos: [
      "https://i.pinimg.com/1200x/5e/c7/64/5ec764d63fc16d543c460a50e4f9b98a.jpg",
      "https://spiritdogtraining.com/wp-content/uploads/2021/05/sable-border-collie.jpeg"
    ]
  },
  {
    id: 89979,
    name: "Chimera",
    species: "dog",
    breed: "Terrier/American Staffordshire",
    age: 3,
    sex: "female",
    weight: 28,
    intakeDate: new Date(2025, 7, 1),
    // No adotion fee specified means "call for details"
    photos: [
      "https://www.purina.com/sites/default/files/2025-09/american_staffordshire_terrier_4_1.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtpvIMwLXwDFFXssBuiLAyV_Fbi1fMPB2i1g&s"
    ]
  },
  {
    id: 90079,
    name: "Justin",
    species: "dog",
    breed: "Mixed Breed (large)",
    age: 2.5,
    sex: "male",
    weight: 56,
    intakeDate: new Date(2025, 7, 7),
    adoptionFee: 80,
    description: "Justin enjoys going on walks and having fun play sessions with his favorite volunteers. He's also done really well meeting other dogs here at the shelter so if you already have a pup at home, he'd love to meet them and see if they could become best buddies!",
    photos: [
      "https://cdn.sanity.io/images/4ij0poqn/production/e24bfbd855cda99e303975f2bd2a1bf43079b320-800x600.jpg"
    ]
  },
  {
    id: 91195,
    name: "Nibbles",
    species: "dog",
    breed: "Alaskan Malamute/Mix",
    age: 2,
    sex: "male",
    weight: 41,
    intakeDate: new Date(2025, 10, 3),
    adoptionFee: 95,
    photos: [
      "https://www.petplace.com/article/breed/media_1c08c8268d48597ec93f516ad12f23f0786d9b2a8.jpeg?width=450&format=jpeg&optimize=medium"
    ]
  },
  {
    id: 90338,
    name: "Melon",
    species: "dog",
    breed: "Siberian Husky/Mix",
    age: 2,
    sex: "female",
    weight: 36,
    intakeDate: new Date(2025, 8, 2),
    adoptionFee: 90,
    photos: [
      "https://cdn.shopify.com/s/files/1/0696/9265/3873/files/jen-1.webp?v=1672306956",
      "https://www.cuteness.com/cuteness/tell-siberian-husky-part-wolf/177827647.jpg"
    ]
  },
  {
    id: 91009,
    name: "Puck",
    species: "dog",
    breed: "Bulldog, American/Mix",
    age: 4,
    sex: "male",
    weight: 24,
    intakeDate: new Date(2025, 9, 12),
    adoptionFee: 80,
    photos: [
      "https://www.akc.org/wp-content/uploads/2020/01/American-Bulldog-standing-in-three-quarter-view-400x267.jpg"
    ]
  },
  {
    id: 91460,
    name: "MooShoo",
    species: "dog",
    breed: "Coonhound/Mix",
    age: 1,
    sex: "male",
    weight: 50,
    intakeDate: new Date(2025, 9, 23),
    adoptionFee: 80,
    photos: [
      "https://image.petmd.com/files/styles/978x550/public/2023-12/treeing-walker-coonhound.jpg"
    ]
  },
  {
    id: 91960,
    name: "Lychee",
    species: "cat",
    breed: "Domestic Medium Hair/Mix",
    age: 1.5,
    sex: "male",
    weight: 9,
    intakeDate: new Date(2025, 10, 29),
    adoptionFee: 50,
    photos: [
      "https://cdn-fastly.petguide.com/media/2022/02/16/8260199/domestic-medium-hair.jpg?size=1200x628",
      "https://static.wixstatic.com/media/5bc363_d10c44e5fff8437c9e5fbb1c0f8de5d3~mv2.jpg/v1/crop/x_0,y_60,w_968,h_663/fill/w_968,h_663,al_c,q_85,enc_avif,quality_auto/17908086269183241_edited.jpg"
    ]
  },
  {
    id: 90252,
    name: "McLaren",
    species: "cat",
    breed: "Domestic Shorthair/Mix",
    age: 0.5,
    sex: "male",
    weight: 4,
    intakeDate: new Date(2025, 7, 22),
    adoptionFee: 50,
    photos: [
      "https://www.catster.com/wp-content/uploads/2023/11/American-shorthair-cat-kitten-sitting_Top-Photo-Engineer_Shutterstock.jpg"
    ]
  },
  {
    id: 90253,
    name: "Porsche",
    species: "cat",
    breed: "Domestic Shorthair/Mix",
    age: 0.5,
    sex: "female",
    weight: 3,
    intakeDate: new Date(2025, 7, 22),
    adoptionFee: 50,
    photos: [
      "https://domesticshorthaircat.weebly.com/uploads/1/4/2/0/142058815/published/domestic-shorthair-cat-2.jpg?1654044662"
    ]
  },
  {
    id: 90705,
    name: "Sugar Britches",
    species: "cat",
    breed: "Domestic Shorthair/Mix",
    age: 7,
    sex: "female",
    weight: 11,
    intakeDate: new Date(2025, 8, 28),
    adoptionFee: 40,
    photos: [
      "https://d3544la1u8djza.cloudfront.net/APHI/Blog/2022/02-11/gray+stripe+domestic+shortahair+tabby+cat+resting+in+a+maroon+cat+tree+bed-min.jpg"
    ]
  },
  {
    id: 90828,
    name: "Dewey",
    species: "rabbit",
    breed: "Rex",
    age: 6,
    sex: "male",
    weight: 6.5,
    intakeDate: new Date(2025, 8, 11),
    adoptionFee: 30,
    photos: [
      "https://image.petmd.com/files/styles/863x625/public/2023-10/rex.rabbit.jpg",
      "https://images.accentuate.io/?c_options=w_640&shop=vetslovepets-prod.myshopify.com&image=https://cdn.accentuate.io/593473011948/1745981803269/Untitled-design-(43)-Large.png?v=1745981803269"
    ]
  },
  {
    id: 90912,
    name: "Tinsel",
    species: "rabbit",
    breed: "Rex, Mini",
    age: 7,
    sex: "female",
    weight: 3.8,
    intakeDate: new Date(2025, 10, 30),
    adoptionFee: 25,
    photos: [
      "https://ccspca.com/wp-content/uploads/2017/11/Mini-Rex-Rabbit.png"
    ]
  },
  {
    id: 91004,
    name: "Nesquik",
    species: "other",
    breed: "Guinea Pig, Lionhead",
    age: 1,
    sex: "male",
    weight: 6.2,
    intakeDate: new Date(2025, 11, 9),
    adoptionFee: 20,
    photos: [
      "https://as2.ftcdn.net/jpg/01/24/55/07/1000_F_124550714_CYLLkpqgdKSlxlXOHtKq62wYRMIF8JcA.jpg"
    ]
  },
  {
    id: 91012,
    name: "Katie",
    species: "other",
    breed: "Guinea Pig, American",
    age: 6.5,
    sex: "female",
    weight: 1.8,
    intakeDate: new Date(2025, 11, 10),
    adoptionFee: 20,
    photos: [
      "https://cdn.shopify.com/s/files/1/0530/3762/9610/files/ginger_and_white_american_guinea_pig_1024x1024.png?v=1669036589",
      "https://cdn.shopify.com/s/files/1/0779/5136/9553/files/CB_uniKwkgyujPdbnS-756tklSvLn7_pEZEU3uPDo7tP0j_i0SieTUSNelRWSP633gqRpRU_qweo6eWl1sql6NjG8AMiVbigZzQ6itY_DPoyoIprbau5wSVtW_ccUOgjjJAtLpqls0.jpg?v=1714918491"
    ]
  }
]

export const lostFoundPets: Pet[] = [
  {
    id: 91786,
    species: "dog",
    breed: "German Shepherd/Mix",
    age: 0.25,
    sex: "male",
    weight: 30,
    intakeDate: new Date(2025, 11, 11),
    photos: ["https://showsightmagazine.com/wp-content/uploads/2023/09/Tending-gait21-1.jpg"]
  },
  {
    id: 91783,
    species: "dog",
    breed: "Terrier, Yorkshire/Mix",
    age: 6,
    sex: "male",
    weight: 15,
    intakeDate: new Date(2025, 11, 10),
    photos: ["https://d3544la1u8djza.cloudfront.net/APHI/Blog/2021/09-15/Yorkshire+terrier+outside+on+a+blue+leash-min.jpg"]
  },
  {
    id: 91420,
    species: "cat",
    breed: "Domestic Shorthair/Mix",
    sex: "female",
    weight: 12,
    intakeDate: new Date(2025, 11, 10),
    photos: ["https://www.animalhumanesociety.org/sites/default/files/styles/animal_450x330/public/adoption/images/large/2025/03/08/a2578956-a76a-4627-b527-731f0b799156.jpg?h=8a14a818&itok=7j87uMN1"]
  },
  {
    id: 91784,
    species: "cat",
    breed: "Domestic Medium Hair/Mix",
    sex: "male",
    age: 10,
    weight: 13,
    intakeDate: new Date(2025, 11, 10),
    photos: ["https://mainecoonmaniacs.com/wp-content/uploads/2025/05/girl-stroking-british-cat-1024x683.webp"]
  }
]
