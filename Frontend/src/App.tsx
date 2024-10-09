import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { SignedIn, SignIn, SignUp, UserProfile } from "@clerk/clerk-react"

import NavBar from './components/NavBar';



function App() {

  return (
    <>
      <div className='fixed bottom-0 w-full'>
      <NavBar />
      </div>
      <BrowserRouter>

        <div className='flex justify-center mt-[2rem]'>
          <Routes>

            <Route path="/" element={
              <>
                <h1 className=''>
                  Welcome to InOrbit...
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, dicta totam et fugit earum provident inventore quisquam exercitationem repellat iusto ad minima itaque omnis sunt quasi. Aut molestiae tempore, aliquam nam dolorem molestias fugiat magni sint iure voluptatum quam quibusdam accusamus asperiores officiis vero, iusto eligendi illum, velit quia quae tenetur ea. Neque quis omnis veritatis officia numquam porro, est, laudantium autem, tenetur ratione rerum tempora sint esse? Ex illo at totam voluptates expedita pariatur! Cum eum accusantium consequatur nesciunt modi quas, at tempora! Natus ab quaerat iusto expedita ratione assumenda rerum, nostrum odio illum omnis laborum quo explicabo maiores dolores. Alias perferendis porro eius eaque accusantium aliquam ad voluptatibus nulla quaerat placeat voluptas, quos voluptatum amet? Accusamus reprehenderit laudantium tenetur nobis earum. Optio, numquam cupiditate velit adipisci tempora unde repellat minima nihil expedita provident. Laudantium nobis, dolor incidunt, reiciendis voluptatum, molestias illo perspiciatis nisi iste odit sed. Quos, blanditiis doloremque veritatis necessitatibus expedita saepe hic facere sapiente fugiat nemo laborum a nihil beatae alias! Molestias nostrum autem fugit, nesciunt iure labore voluptatibus ad quisquam deleniti et adipisci reiciendis, cupiditate quam suscipit omnis repellat voluptatem porro natus accusantium. Tempora modi qui officiis repellendus quas eos, odio ipsam dolorem, unde eum nobis at consequuntur veniam fuga. Doloremque sit aliquam reiciendis rem repellat dolorum repellendus sapiente ullam tenetur debitis dolorem, quaerat mollitia architecto placeat expedita necessitatibus, qui incidunt. Veniam dolore non officia labore, consectetur doloribus voluptas. Doloribus culpa voluptatum iusto nisi neque rerum tempora itaque molestias mollitia nam asperiores, molestiae ad voluptatem distinctio numquam, vero unde repellendus obcaecati, perferendis doloremque? Animi, doloremque fugiat? Itaque reprehenderit ratione placeat eius porro beatae, natus dolores, tempore et quo quis nostrum sequi fugiat perspiciatis aperiam! Deleniti quas veniam alias nam? Blanditiis quam maxime hic libero voluptatum. Quibusdam fuga qui mollitia vitae exercitationem reprehenderit, impedit neque velit ab fugit, necessitatibus blanditiis autem, quia amet accusamus quisquam ea. Atque fugit tenetur non architecto quis, repellendus et. Alias distinctio nulla perferendis dignissimos maxime totam error perspiciatis non vel molestias minima rerum laboriosam, laborum numquam voluptatibus fugit vitae sint assumenda architecto neque! Nesciunt consectetur voluptate nisi reiciendis dolor veniam expedita dolorum obcaecati neque. Fugiat corrupti, perferendis magni aliquid officia deleniti consequatur iure sint alias dicta eveniet corporis placeat quod excepturi odit omnis aperiam accusantium earum facilis recusandae blanditiis temporibus, explicabo ullam? Molestiae quisquam vitae, doloremque necessitatibus, nihil exercitationem iusto, possimus dolor quaerat asperiores illum quasi saepe inventore illo aliquid impedit alias explicabo laboriosam ea aliquam ducimus ipsam laudantium. Non soluta doloribus suscipit modi dolorem. Laboriosam velit delectus consequatur? Nostrum vero enim magnam hic harum officia, nemo odio voluptatibus ipsa est rem corrupti ex natus quam minus at ratione alias ipsam labore consectetur incidunt facere doloribus molestiae. Optio est id accusantium, laudantium sed numquam nisi sunt nulla! Voluptatem dolore quod dolor dolorum fugiat sequi. Sapiente non odit ullam fuga accusantium dolorum ut animi impedit quibusdam fugit libero itaque deserunt aliquid molestiae, quaerat adipisci. Ea, vitae. Voluptates quisquam at ipsum provident sit! Beatae vel necessitatibus molestiae fuga illo totam, voluptates aut recusandae accusantium expedita. Rem quia accusantium iure, doloremque necessitatibus tempore. Omnis suscipit consequuntur pariatur voluptate blanditiis, magnam voluptatibus sit vitae doloremque beatae ducimus eum cumque, rem voluptates tempora. Pariatur, facilis suscipit aperiam veritatis sint ad at laboriosam quo praesentium, aspernatur enim eos aut eligendi. Natus totam temporibus expedita ipsa architecto voluptates consequatur sapiente porro accusamus, veritatis dolores dolorem voluptatem aliquid sequi doloremque labore ipsum at a reprehenderit sed. Saepe sunt tempore rem libero porro nobis? Molestiae, corrupti? Necessitatibus, minima nostrum enim, mollitia magni quod quos, sit error eveniet sed quas quasi? Beatae quae architecto explicabo debitis doloribus quaerat nisi officiis voluptatibus veritatis, dignissimos consequuntur delectus accusantium necessitatibus aperiam modi inventore. Natus cupiditate similique consectetur dicta suscipit pariatur cum! Recusandae quas distinctio sunt asperiores quibusdam, nam quisquam assumenda quam quo veritatis quos facere aspernatur voluptate. Aperiam repellendus soluta architecto fugiat qui voluptates natus asperiores, totam dolorum officia tenetur ipsam, tempore veniam sequi maxime, rerum eaque nobis? Amet qui possimus reprehenderit doloribus est cupiditate, sunt in illum dolores temporibus doloremque odio dolorem quibusdam ipsum explicabo magni. Itaque nobis esse quia sequi ipsum eum aut maxime a autem mollitia nulla, error porro illum placeat, quisquam quasi beatae suscipit. Voluptatibus, labore quo magni corporis unde quae obcaecati veritatis earum itaque accusantium, vitae rem quaerat impedit voluptas officia magnam eaque. Molestiae recusandae aliquam deserunt nisi earum exercitationem quaerat maxime corrupti saepe non. Sequi animi numquam laudantium, neque ad aut fugit reiciendis. Eligendi, ab sunt. Nam eveniet optio architecto! Quis quas minus quisquam tempore consequatur eius nisi doloribus, veritatis necessitatibus eos eligendi excepturi natus dignissimos repudiandae esse repellendus cumque nesciunt est commodi recusandae pariatur, ipsum assumenda. Dolorem, maxime. Vel, incidunt aut. Labore cumque ipsum aperiam cum, porro temporibus eos doloremque nam, laborum eligendi sapiente illo, deserunt eum similique? Et vitae quas magnam nostrum praesentium dolor laudantium vel libero eaque fuga quidem tempora doloribus reprehenderit a, repellendus ullam, iste perferendis. Ipsa molestias deserunt accusantium eum voluptate soluta nam sit nisi maxime quae consectetur iste facere repudiandae ad doloribus earum quos est, qui obcaecati veritatis tenetur rem quia. Eos expedita cum maiores officiis consequatur sequi tempora adipisci ab. Esse omnis hic reprehenderit dicta eligendi quisquam dignissimos cupiditate ullam dolorum? Numquam, reiciendis expedita! Unde accusamus quam porro cumque, laborum doloribus non nesciunt, debitis dolore aperiam ullam. Exercitationem reiciendis praesentium doloremque esse autem ullam voluptatum quam quidem ratione nesciunt repudiandae magni officiis enim, soluta, ipsa repellendus explicabo doloribus voluptate nulla minima. Adipisci tempore aut tempora distinctio inventore, assumenda eius! Tenetur laboriosam molestias at modi similique officiis, aperiam ipsam totam possimus minus ea recusandae sed pariatur, veniam fuga. Iusto, voluptatem! Similique perferendis quod ratione voluptates laborum accusantium, incidunt eligendi veniam iure molestias earum soluta voluptatem totam ipsum qui quibusdam tenetur velit reiciendis. Vitae quisquam, qui fugit deserunt eligendi exercitationem facilis accusantium cupiditate odit, nam iure maiores in mollitia velit et ipsa beatae magnam ullam ex! Ea deleniti in iusto eaque! Maxime laborum quod sit deserunt neque, illum non eaque possimus nobis cumque illo exercitationem architecto vero doloribus ratione reprehenderit voluptatibus laboriosam nulla.</p>
                </h1>
              </>


            } />
            <Route path="/signup" element={<SignUp fallbackRedirectUrl={'/'} />} />
            <Route path="/signin" element={<SignIn fallbackRedirectUrl={'/'} />} />
            <Route path="/userprofile" element={
              <SignedIn>
                <UserProfile />

              </SignedIn>
            } />

          </Routes>
        </div>





      </BrowserRouter>
    </>
  )
}

export default App
