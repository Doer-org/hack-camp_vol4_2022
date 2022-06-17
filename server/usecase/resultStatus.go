package usecase

type ResultStatus struct {
	StatusCode int
	Error      error
}

func NewResultStatus(status int, err error) *ResultStatus {
	return &ResultStatus{
		StatusCode: status,
		Error:      err,
	}
}
