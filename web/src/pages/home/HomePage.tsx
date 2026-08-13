import { Body } from "@/components/ui/Body/Body";
import { Page } from "@/components/ui/Page/Page";
import { HomePageButtons } from "./HomePageButtons";
import { HomePageImage } from "./HomePageImage";
import { HomePageTitle } from "./HomePageTitle";
import { HomePageWrapper } from "./HomePageWrapper";

export const HomePage = () => {
    return (
        <Page>
            <Body>
                <HomePageWrapper>
                    <HomePageButtons />
                    <HomePageTitle />
                    <HomePageImage />
                </HomePageWrapper>
            </Body>
        </Page>
    );
};
