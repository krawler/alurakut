import Head from "next/head";
import {
  Container,
  Main,
  Title,
  Description,
  CodeTag,
} from "@/components/sharedstyles";
import Cards from "@/components/cards";
import styled from "styled-components";
import {AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet} from "../lib/AluraCommons";
import Box from "@/components/Box"
import {ProfileRelationsBoxWrapper} from "@/components/ProfileRelations"


const MainGrid = styled.main`
  width: 100%;
  grid-gap: 10px;
  margin-left: auto;
  margin-right: auto;
  max-width: 500px;
  padding: 16px;
  .profileArea {
    display: none;
    @media(min-width: 868px){
      display: block;
    }
  }
  @media(min-width: 860px){
    max-width: 1110px;
    display: grid;
    grid-template-areas: "profileArea welcomeArea profileRelationsArea";
    grid-template-columns: 220px 1fr 412px;
  }
`;

function ProfileSidebar(propriedades){
  console.log(propriedades);
  return (
    <Box>
      <img src={`https://github.com/${propriedades.githubUser}.png`} style={{ borderRadius: '8px' }} />
      <hr />
      
      <p>
        <a className="boxLink" href={`https://github.com/${propriedades.githubUser}`}>
          @{propriedades.githubUser}
        </a>
      </p>
      <hr />
    </Box>
  )
}

export default function Home() {

  const usuarioAleatorio = 'krawler';
  const pessoasFavoritas = ['juunegreiros', 'omariosouto', 'peas', 'rafabellerini', 'felipefialho']

  return (
      <>
      <AlurakutMenu githubUser={usuarioAleatorio} />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>      
          <ProfileSidebar githubUser={usuarioAleatorio} />
        </div>
        <div  className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1>Bem Vindo(a)</h1>
            <OrkutNostalgicIconSet />
          </Box>
          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
            <form action="">
             
              <div>
                <input type="text" name="title"  id="title" 
                       aria-label="Qual vai ser o nome da sua comunidade?"
                       placeholder="Qual vai ser o nome da sua comunidade?" />
                <input type="text" name="imagem" id="imagem"
                       aria-label="Coloque uma url para usarmos de capa"
                       placeholder="Coloque uma url para usarmos de capa" />
              </div>

              <button>
                Criar Comunidade
              </button>
            </form>
          </Box>
        </div>
        <div  className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da comunidade ({pessoasFavoritas.length})
            </h2>
            <ul>
              {pessoasFavoritas.map((itemAtual) => {
                  return (
                   <li>
                     <a href={`https://github.com/${itemAtual}.png`} key={itemAtual}>
                       <img src={`https://github.com/${itemAtual}.png`} style={{ borderRadius: '8px' }} />
                     </a>
                   </li>
                  )
              })
              }
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
      </>
  );
}
