import { Body } from "@/components/ui/Body/Body";
import { Page } from "@/components/ui/Page/Page";
import { LoginPageForm } from "./LoginPageForm";

export const LoginPage = () => {
    return (
        <Page>
            <Body>
                <LoginPageForm />
            </Body>
        </Page>
    );
};
