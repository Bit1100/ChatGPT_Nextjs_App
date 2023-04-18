import Layout from "@/AppLayout";
import { wrapper } from "@/store";

// Function acting like a Templating Language
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default wrapper.withRedux(MyApp);
