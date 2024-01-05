export const convertClass = ({
  currentLang,
  faClass,
  enClass,
}: {
  currentLang: string;
  faClass: string;
  enClass: string;
}) => {
  if (currentLang) {
    if (faClass || enClass) {
      if (currentLang === "fa") {
        return faClass;
      } else {
        return enClass;
      }
    }
  }
};
