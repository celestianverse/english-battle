import { Body } from "@/components/ui/Body/Body";
import { Page } from "@/components/ui/Page/Page";
import { HomePageButton } from "./HomePageButton";
import { HomePageImage } from "./HomePageImage";
import { HomePageTitle } from "./HomePageTitle";
import { HomePageWrapper } from "./HomePageWrapper";

export const HomePage = () => {
    return (
        <Page>
            <Body>
                <HomePageWrapper>
                    <HomePageButton />
                    <HomePageTitle />
                    <HomePageImage />
                </HomePageWrapper>
            </Body>
        </Page>
    );
};
