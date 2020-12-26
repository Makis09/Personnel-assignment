import React from "react";
import { Container, Row } from "react-bootstrap";
import MainImage from "../components/DetailPage/MainImage/MainImage";
import Info from "../components/DetailPage/Info/Info";
import RelatedImages from "../components/DetailPage/RelatedImages/RelatedImages";

export default function DetailPage(props) {
  let content = <h1>Loading</h1>;

  if (props.data) {
    const {
      product_name,
      image_url,
      countries,
      brands,
      ingredients,
      allergens,
      image_ingredients_url,
      image_nutrition_url,
    } = props.data.product;
    content = (
      <>
        <MainImage src={image_url} alt={product_name} />
        <Info
          title={product_name}
          ingredients={ingredients}
          allergens={allergens}
          countries={countries}
          brands={brands}
        />
        <RelatedImages
          ingredientImage={image_ingredients_url}
          nutritionImage={image_nutrition_url}
        />
      </>
    );
  }

  return (
    <Container>
      <Row style={{ marginTop: "50px" }}>{content}</Row>
    </Container>
  );
}
