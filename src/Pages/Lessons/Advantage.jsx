import React from "react";
import { BiTrendingUp } from "react-icons/bi";
import { boxes } from "../../mock/boxes";
import { StyledHeading } from "../../components/Text/StyledText";
import { FlexBox } from "../../components/FlexBox/FlexBox";
import {
  AdvantagesBox,
  AdvantagesDownBoxes,
  AdvantagesDownBoxesBox,
  AdvantagesLesson,
  AdvantagesLessonBoxes,
  AdvantagesLessonBoxesBox,
  AdvantagesLessonBoxesBoxTxtBox,
  AdvantagesLessonLine,
  AdvantagesUp,
  UpLine,
  IconPart,
  TextPart,
  DownBoxes,
} from "./Advantage.style";
function Advantage() {
  return (
    <FlexBox flexDirection="column">
      <FlexBox flexDirection="column">
        <StyledHeading fontSize="40px">Bizning afzalliklarimiz</StyledHeading>
        <UpLine />
      </FlexBox>
      <FlexBox height="auto" flexWrap="wrap" marginTop="20px" gap="20px">
        {boxes.map((box) => (
          <AdvantagesBox>
            <span>{box.icon}</span>
            <h1>{box.title}</h1>
            <p>{box.text}</p>
          </AdvantagesBox>
        ))}
      </FlexBox>
      <FlexBox>
        <AdvantagesDownBoxesBox>
          <FlexBox fontSize="90px" width="40%" borderRadius="10px">
            <BiTrendingUp />
          </FlexBox>
          <FlexBox
            flexDirection="column"
            alignItems="flexStart"
            gap="20px"
            width="60%"
            borderRadius="10px"
          >
            <StyledHeading fontSize="30px" color="white">
              Bizning vazifamiz
            </StyledHeading>
            <StyledHeading color="white">Hayotga tayyorlaymiz.</StyledHeading>
          </FlexBox>
        </AdvantagesDownBoxesBox>
        <AdvantagesDownBoxesBox>
          <FlexBox fontSize="90px" width="40%" borderRadius="10px">
            <BiTrendingUp />
          </FlexBox>
          <FlexBox
            flexDirection="column"
            alignItems="flexStart"
            gap="20px"
            width="60%"
            borderRadius="10px"
          >
            <StyledHeading fontSize="30px" color="white">
              Bizning maqsadimiz
            </StyledHeading>
            <StyledHeading color="white" fontSize="16px ">
              Ta'lim sifatni saqlab va oshirgan holda xususiy maktablar orasida
              lider bo’lish.
            </StyledHeading>
          </FlexBox>
        </AdvantagesDownBoxesBox>
        {/* <AdvantagesDownBoxesBox>
          <AdvantagesDownBoxesBoxSmallBox>
            <AdvantagesDownBoxesBoxSmallBoxIcon>
            </AdvantagesDownBoxesBoxSmallBoxIcon>
            <AdvantagesDownBoxesBoxSmallBoxText>
              <h1>Bizning vazifamiz</h1>
              <p>Hayotga tayyorlaymiz.</p>
            </AdvantagesDownBoxesBoxSmallBoxText>
          </AdvantagesDownBoxesBoxSmallBox>
        </AdvantagesDownBoxesBox> */}
        {/* <AdvantagesDownBoxesBox>
          <AdvantagesDownBoxesBoxSmallBox>
            <AdvantagesDownBoxesBoxSmallBoxIcon>
              <BiTrendingUp />
            </AdvantagesDownBoxesBoxSmallBoxIcon>
            <AdvantagesDownBoxesBoxSmallBoxText>
              <h1>Bizning maqsadimiz</h1>
              <p>
                Ta'lim sifatni saqlab va oshirgan holda xususiy maktablar
                orasida lider bo’lish.
              </p>
            </AdvantagesDownBoxesBoxSmallBoxText>
          </AdvantagesDownBoxesBoxSmallBox>
        </AdvantagesDownBoxesBox> */}
      </FlexBox>
      <FlexBox flexDirection="column" marginTop="20px">
        <StyledHeading fontSize="40px">Bizning Darslarimiz</StyledHeading>
        <UpLine />
        <DownBoxes>
          <FlexBox
            width="40%"
            height="320px"
            borderRadius="10px"
            flexDirection="column"
          >
            <h2>Science in English</h2>
            <AdvantagesLessonBoxesBoxTxtBox>
              Bepul
            </AdvantagesLessonBoxesBoxTxtBox>
            <ul>
              <li>Darslarning davomiyligi haftasiga 1 marta 45 minut</li>
              <li>Dars davomiyligi: 5-9 sinflar</li>
              <li>Kurs to'lovlari maktab to'lovi ichiga kiritilgan</li>
            </ul>
            <button>Aloqa</button>
          </FlexBox>
          <AdvantagesLessonBoxesBox>
            <h2>SPEAKING COURSE</h2>
            <AdvantagesLessonBoxesBoxTxtBox>
              Bepul
            </AdvantagesLessonBoxesBoxTxtBox>
            <ul>
              <li>Darslarning davomiyligi 90 minut, haftasiga 3 marta.</li>
              <li>Kurs davomiyligi: cheklanmagan</li>
              <li>Kurs to'lovlari maktab to'lovi ichiga kiritilgan.</li>
            </ul>
            <button>Aloqa</button>
          </AdvantagesLessonBoxesBox>
        </DownBoxes>
      </FlexBox>
    </FlexBox>
  );
}

// const AdvantagesLesson = styled.div``;
// const AdvantagesLesson = styled.div``;
// const AdvantagesLesson = styled.div``;
// const AdvantagesLesson = styled.div``;
export default Advantage;
