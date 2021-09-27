import { Auth, Button, IconLogOut } from "@supabase/ui";
import { EditProfile } from "src/components/EditProfile";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { LayoutErrorBoundary } from "src/layout/LayoutErrorBoundary";
import { client } from "src/libs/supabase";

type Props = {
  children: React.ReactNode;
};

export const AuthLayout = (props: Props) => {
  const { user } = Auth.useUser();

  return (
    <div className="bg-gray-300">
      <div className="container mx-auto grid grid-rows-[auto,1fr,auto] min-h-screen">
        <Header />
        <main className="px-4 text-gray-600 bg-gray-100">
          <LayoutErrorBoundary>
            {user ? (
              <div>
                <div className="flex justify-end mt-4">
                  <EditProfile user={user} />
                </div>
                <div>{props.children}</div>
                <div className="flex justify-end mx-2 my-4">
                  <Button
                    size="medium"
                    icon={<IconLogOut />}
                    onClick={() => client.auth.signOut()}
                  >
                    Sign out
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex justify-center pt-8">
                <div className="w-full sm:w-96">
                  <Auth
                    supabaseClient={client}
                    providers={["github"]}
                    socialColors={true}
                  />
                </div>
              </div>
            )}
          </LayoutErrorBoundary>
        </main>
        <Footer />
      </div>
    </div>
  );
};
