package domain

type Snack struct {
	Id      int
	Name    string
	Price   int
	Img_url string
	Detail  string
	Likes   string
}

type SnackForGet struct {
	Id      int `json:"id"`
	Name    string `json:"name"`
	Price   int `json:"price"`
	Img_url string `json:"imgUrl"`
	Detail  string `json:"detail"`
	Likes   string `json:"likes"`
}

func (s *Snack) BuildForGet() SnackForGet {
	snack := SnackForGet{}
	snack.Id = s.Id
	snack.Name = s.Name
	snack.Price = s.Price
	snack.Img_url = s.Img_url
	snack.Detail = s.Detail
	snack.Likes = s.Likes
	return snack
}