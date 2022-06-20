package domain

type Ramen struct {
	Id      int
	Name    string
	Price   int
	Img_url string
	Detail  string
}

type RamenForGet struct {
	Id      int    `json:"id"`
	Name    string `json:"name"`
	Price   int    `json:"price"`
	Img_url string `json:"imgUrl"`
	Detail  string `json:"detail"`
}


// jsonで扱える構造体を返す
func (r *Ramen) BuildRamenForGet() RamenForGet {
	ramen := RamenForGet{}
	ramen.Id = r.Id
	ramen.Name = r.Name
	ramen.Price = r.Price
	ramen.Img_url = r.Img_url
	ramen.Detail = r.Detail
	return ramen
}
