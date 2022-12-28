import { createBrowserRouter } from "react-router-dom";
import CariMobil from "../components/carimobil/CariMobil";
import DetailPaketSewa from "../components/detailpaketsewa/DetailPaketSewa";
import HasilPencarian from "../components/hasilpencarian/HasilPencarian";
import SectionHome from "../components/sections/SectionHome";

// NOTES: each time you want to add new page, add it here

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SectionHome />,
  },
  {
    path: "/carimobil",
    element: <CariMobil />,
  },
  {
    path: "/hasilpencarian",
    element: <HasilPencarian />,
  },
  {
    path: "/detailpaketsewa",
    element: <DetailPaketSewa />,
  },
  // {
  //     path: "/testimoni",
  //     element: <SectionTestimoni />,
  // },
  // {
  //     path: "/detail",
  //     element: <RenderLayout children={<SectionDetail />} />,
  // },
]);
