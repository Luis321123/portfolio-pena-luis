import { useTranslation } from "react-i18next";

type PropsType = {
  isViewPdf: boolean;
  setIsViewPdf: React.Dispatch<React.SetStateAction<boolean>>;
};

const ViewPdf = ({ isViewPdf, setIsViewPdf }: PropsType) => {
  const { t, i18n } = useTranslation();
  const cvSrc = i18n.language.startsWith("es") ? "/Luis_pena_spanish.pdf" : "/Luis_pena_english.pdf";
  return (
    <>
      <iframe
        src={cvSrc}
        className=" w-full h-full fixed left-0 bottom-0 z-[999999]"
      />
      <button
        className="flex items-center justify-center rounded-3xl p-4 bg-red-500 w-18 h-12 fixed right-4 bottom-14 font-bold text-xl z-[9999999999999]"
        onClick={() => setIsViewPdf(false)}
      >
        {t("viewPdf.exit")}
      </button>
    </>
  );
};

export default ViewPdf;