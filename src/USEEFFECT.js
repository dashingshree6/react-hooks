import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Icon, Image, Item, Label } from "semantic-ui-react";

export default function USEEFFECT() {
  const [data, setData] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [rating, setRating] = useState("");

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setImage(response.data[0].image);
      setData(response.data[0].title);
      setPrice(response.data[0].price);
      setDesc(response.data[0].description);
      setCategory(response.data[0].category);
      console.log(data);
    });
  }, []);

  return (
    <div>
      <h2>useEffect Hook</h2>
      <Item.Group>
        <Item>
          <Item.Image size="tiny" src={image} />

          <Item.Content>
            <Item.Header as="a">{data}</Item.Header>
            <Item.Meta>
              <span className="cinema">{category}</span>
            </Item.Meta>
            <Item.Description>{desc}</Item.Description>
            <Item.Extra>
              <Button primary floated="right">
                Buy Now
                <Icon name="right chevron" />
              </Button>
              <Label>{price}</Label>
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
      <br />
    </div>
  );
}
