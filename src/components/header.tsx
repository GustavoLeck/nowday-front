import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Area,
  Areas,
  Authenticated,
  AuthenticatedBody,
  AuthenticatedBodyLink,
  AuthenticatedFooter,
  AuthenticatedFooterAction,
  AuthenticatedHeader,
  DefaultSearch,
  GeneralBar,
  Header,
  Search,
  SearchInputContainer,
  SearchRelatedLink,
  SearchRelatedLinks,
  SearchRelatedLinksTitle,
  SearchTitle,
} from "@ama-pt/agora-design-system";

import { Icon } from "@ama-pt/agora-design-system";
import { InputSearchBar } from "@ama-pt/agora-design-system";

const HeaderAuthenticatedStory = (args: any) => {
  const navigate = useNavigate();
  const [selectedArea, setSelectedArea] = useState("dashboard");
  const handleAreaChange = (val: string) => {
    setSelectedArea(val);
    navigate(`/${val}`);
  };

  return (
    <header>
      <Header {...args}>
        <GeneralBar aria-label="Utilities menu">
          <Areas aria-label="Areas menu" onChange={handleAreaChange}>
            <Area
              label="Dashboard"
              value="dashboard"
              active={selectedArea === "dashboard"}
            />
            <Area
              label="Clientes"
              value="clientes"
              active={selectedArea === "clientes"}
            />
            <Area
              label="Pedidos"
              value="pedidos"
              active={selectedArea === "pedidos"}
            />
            <Area
              label="Definições"
              value="definicoes"
              active={selectedArea === "definicoes"}
            />
          </Areas>

          <Search label="Pesquisar">
            <DefaultSearch>
              <SearchTitle>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </SearchTitle>
              <SearchInputContainer>
                <InputSearchBar label="Search term" />
              </SearchInputContainer>
              <SearchRelatedLinks>
                <SearchRelatedLinksTitle>
                  Vero laborum quis ratione. Cum ea praesentium temporibus sint
                  maiores!
                </SearchRelatedLinksTitle>
                <SearchRelatedLink>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.example.com"
                  >
                    Related Link 1
                  </a>
                </SearchRelatedLink>
                <SearchRelatedLink>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.example.com"
                  >
                    Related Link 2
                  </a>
                </SearchRelatedLink>
                <SearchRelatedLink>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.example.com"
                  >
                    Related Link 3
                  </a>
                </SearchRelatedLink>
                <SearchRelatedLink>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.example.com"
                  >
                    Related Link 4
                  </a>
                </SearchRelatedLink>
                <SearchRelatedLink>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.example.com"
                  >
                    Related Link 5
                  </a>
                </SearchRelatedLink>
              </SearchRelatedLinks>
            </DefaultSearch>
          </Search>

          <Authenticated
            information="John Doe"
            avatarType="initials"
            srcPath="JD"
            aria-label="Authenticated Options"
          >
            <AuthenticatedHeader closeAriaLabel="Close authenticated options">
              John Doe
            </AuthenticatedHeader>
            <AuthenticatedBody>
              <AuthenticatedBodyLink
                hasIcon
                leadingIcon="agora-line-calendar"
                leadingIconHover="agora-solid-calendar"
              >
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.example.com"
                >
                  <span>Example.com 1</span>
                </a>
              </AuthenticatedBodyLink>
              <AuthenticatedBodyLink
                hasIcon
                leadingIcon="agora-line-calendar"
                leadingIconHover="agora-solid-calendar"
              >
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.example.com"
                >
                  <span>Example.com 2</span>
                </a>
              </AuthenticatedBodyLink>
              <AuthenticatedBodyLink
                hasIcon
                leadingIcon="agora-line-calendar"
                leadingIconHover="agora-solid-calendar"
              >
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.example.com"
                >
                  <span>Example.com 3</span>
                </a>
              </AuthenticatedBodyLink>
            </AuthenticatedBody>
            <AuthenticatedFooter>
              <AuthenticatedFooterAction>
                <Icon aria-hidden />
                Delete Account
              </AuthenticatedFooterAction>
              <AuthenticatedFooterAction>
                <Icon aria-hidden />
                Logout
              </AuthenticatedFooterAction>
            </AuthenticatedFooter>
          </Authenticated>
        </GeneralBar>
      </Header>
    </header>
  );
};

HeaderAuthenticatedStory.args = (() => {
  const storyArgs: any = {};
  return storyArgs;
})();

export function AppHeader() {
  return <HeaderAuthenticatedStory />;
}

export { HeaderAuthenticatedStory };
