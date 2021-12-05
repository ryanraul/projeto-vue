import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      feedbacks:[
         {
            id: 1,
            title:"Good",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt .",
            grade: 4,
            userName: 'Luis',
            avatar:"https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light",            
         },
         {
            id: 2,
            title:"Great",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt .",
            grade: 5,
            userName: 'Darius',
            avatar:"https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShaggyMullet&accessoriesType=Prescription02&hairColor=Auburn&facialHairType=BeardLight&facialHairColor=Red&clotheType=BlazerSweater&eyeType=Surprised&eyebrowType=UpDown&mouthType=Disbelief&skinColor=Yellow",            
         },
         {
            id: 3,
            title:"Bad",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt .",
            grade: 3,
            userName: 'Gabriel',
            avatar:"https://avataaars.io/?avatarStyle=Transparent&topType=WinterHat4&accessoriesType=Prescription02&hatColor=PastelRed&facialHairType=Blank&facialHairColor=BlondeGolden&clotheType=ShirtVNeck&clotheColor=PastelRed&graphicType=Resist&eyeType=Happy&eyebrowType=UnibrowNatural&mouthType=Sad&skinColor=DarkBrown",            
         },
         {
            id: 4,
            title:"Awnful",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt .",
            grade: 2,
            userName: 'Mauro',
            avatar:"https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortFlat&accessoriesType=Prescription01&hairColor=Black&facialHairType=MoustacheMagnum&facialHairColor=Brown&clotheType=GraphicShirt&clotheColor=PastelBlue&graphicType=Skull&eyeType=Side&eyebrowType=FlatNatural&mouthType=Smile&skinColor=Light",            
         },
         {
            id: 5,
            title:"Good",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt .",
            grade: 3,
            userName: 'Samira',
            avatar:"https://avataaars.io/?avatarStyle=Transparent&topType=LongHairBun&accessoriesType=Kurt&hairColor=BlondeGolden&facialHairType=Blank&facialHairColor=Brown&clotheType=BlazerSweater&eyeType=Hearts&eyebrowType=Angry&mouthType=Smile&skinColor=Tanned",            
         },
         {
            id: 6,
            title:"Awnful",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt .",
            grade: 1,
            userName: 'Hélia',
            avatar:"https://avataaars.io/?avatarStyle=Transparent&topType=LongHairBigHair&accessoriesType=Prescription01&hairColor=BrownDark&facialHairType=Blank&facialHairColor=BrownDark&clotheType=BlazerShirt&eyeType=Side&eyebrowType=UpDown&mouthType=Smile&skinColor=DarkBrown",            
         },
         {
            id: 7,
            title:"Awnful",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt .",
            grade: 2,
            userName: 'Aisha',
            avatar:"https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortFlat&accessoriesType=Prescription01&hairColor=SilverGray&facialHairType=Blank&facialHairColor=Blonde&clotheType=BlazerShirt&eyeType=Close&eyebrowType=Default&mouthType=Twinkle&skinColor=Tanned",            
         },
         {
            id: 8,
            title:"Great",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt .",
            grade: 5,
            userName: 'Marcos',
            avatar:"https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairTheCaesarSidePart&accessoriesType=Sunglasses&hairColor=Blonde&facialHairType=MoustacheFancy&facialHairColor=BlondeGolden&clotheType=BlazerShirt&eyeType=Default&eyebrowType=AngryNatural&mouthType=Smile&skinColor=Yellow",            
         }
     ],
     title:'CARDS',
     gradeFilter: 0,
  },
  mutations: {
   gradeFilterUpdate (state){
      state.gradeFilter++;
      if(state.gradeFilter > 5)
         state.gradeFilter = 0; 
     }
  },
  actions: {
   gradeFilterUpdate (context){
      context.commit('gradeFilterUpdate');
   }
  },
  getters: {
   getFeedbacks(state) {
      if(state.gradeFilter > 0)
         return state.feedbacks.filter(feedback => feedback.grade == state.gradeFilter);
      return state.feedbacks;
   },
   getGradeFilter(state){
      return state.gradeFilter;
   }
  }
})
