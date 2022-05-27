import AppAppBar from "../modules/views/AppAppBar";
import AppFooter from "../modules/views/AppFooter";
import ProductCTA from "../modules/views/ProductCTA";
import ProductCategories from "../modules/views/ProductCategories";
import ProductHero from "../modules/views/ProductHero";
import ProductHowItWorks from "../modules/views/ProductHowItWorks";
import ProductSmokingHero from "../modules/views/ProductSmokingHero";
import ProductValues from "../modules/views/ProductValues";
import withRoot from "../modules/withRoot";


function App(props) {
  return (
    <div className="App">
      <AppAppBar {...props}/>
      <ProductHero />
      <ProductValues />
      <ProductCategories />
      <ProductHowItWorks />
      <ProductCTA />
      <ProductSmokingHero />
      <AppFooter />
    </div>
  );
}
export default withRoot(App);
