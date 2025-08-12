import { HomePage } from "@/compoment/homepage/homepage";

const HomeMainPage = (props) => {
  let propsData = props.propsData || {};
return(
  <HomePage propsData={propsData}/>
)
};
export default HomeMainPage;

export const getServerSideProps = async () => {
  const headerData = [
    {
      title: "About",
      url: "/about",
      subcategories: null,
    },
    {
      title: "Shop",
      url: "/shop",
      x: [
        {
          title: "curtains",
          url: "/curtain",
        },
        {
          title: "home Decore",
          url: "/home-decore",
        },
        {
          title: "lighting",
          url: "/lighting",
        },
      ],
    },
    {
      title: "Contact",
      subcategories: null,
    },
  ];
  const banner = [
    {
      tagline: "Where Comfort Meets Style",
      title: "Summer Collection",
      url:"https://cdn.ddecor.com/media/mageplaza/bannerslider/banner/image/s/a/sandscape.jpg"
    },
    {
      tagline: "Dress Your Home, Impress Your Soul",
      title: "Winter Collection",
      url:"https://cdn.ddecor.com/media/wysiwyg/bannerslider/desktop/4_RMC.jpg"
    },
    {
      tagline: "Illuminate Your Space with Elegance",
      title: "curtains",
      url:"https://cdn.ddecor.com/media/mageplaza/bannerslider/banner/image/a/f/african-vibes_theme_1920x1080-pix.jpg"
    },
    {
      tagline: "Transform Your Home with Our Best Sellers",
      title: "curtains",
      url:"https://cdn.ddecor.com/media/mageplaza/bannerslider/banner/image/k/i/kilim_1920x1080-pix.jpg"
    },
    {
      tagline: "Discover the Best in Home Decor",
      title: "best sellers",
      url:"https://cdn.ddecor.com/media/mageplaza/bannerslider/banner/image/b/e/bedding-combo_1920x1080-pix.jpg "
    },
  ];
  const offergrid = [
    {
      title: "pots and planters",
    },
    {
      title: "wall art",
    },
    {
      title: "wall clocks",
    },
    {
      title: "wall mirrors",
    },
    {
      title: "wall shelves",
    },
    {
      title: "wall hangings",
    },
  ];
  return {
    props: {
      propsData: {
        headerData,
        banner,
        offergrid,
      },
    },
  };
};
