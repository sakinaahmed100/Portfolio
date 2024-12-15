from fastapi import FastAPI, HTTPException, status
from pydantic import BaseModel, EmailStr, validator
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Add CORS middleware to allow requests from your frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://127.0.0.1:5173"],  # Frontend URL
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods (GET, POST, etc.)
    allow_headers=["*"],  # Allows all headers
)

@app.get("/")
def read_root():
    return {"message": "Welcome to the FastAPI Backend!"}

# Refined Contact Model with Validation
class Contact(BaseModel):
    name: str
    email: EmailStr  # Using Pydantic's EmailStr for email validation
    message: str

    # Custom Validator to check the message length
    @validator('message')
    def validate_message_length(cls, value):
        if len(value) < 10:
            raise ValueError("Message must be at least 10 characters long")
        return value

@app.post("/contact")
def create_contact(contact: Contact):
    # If the contact data passes validation, proceed
    try:
        # Log the form data for now (later we can save to a database)
        print(f"Name: {contact.name}, Email: {contact.email}, Message: {contact.message}")
        return {"status": "success", "message": "Thank you for contacting us!"}
    
    except ValueError as e:
        # Handle any validation errors and return meaningful error response
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=str(e)
        )



