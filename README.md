# Odyssey

# Setup

Kindly follow the following steps to setup

1. Clone the repository.

You can use the command

```
git clone git@github.com:sdslabs/odyssey.git
```

2. change directory to frontend in odyssey

```
cd odyssey/frontend/
```

3. Create a file .env.local if not present and write the following things in it

NEXTAUTH_URL=http://localhost:3000/api/auth/callback/github
GITHUB_ID= the_github_id_you_have
GITHUB_SECRET=the_github_secret_key_you_have

This can be achieved by directly typing the following command and writing the desired materials

```
nano .env.local
```

You can also check if the step has been completed correctly using

```
cat .env.local
```

4. Now open a second terminal and change the directory to odyssey/

5. Then run the following command

```
source bin/activate
```

6. change directory to backend

```
cd backend/
```

7. Now install the requirements using pip install

```
pip install -r requirements.txt
```

8. now run the following commands
```
python3 manage.py makemigrations
python3 manage.py migrate odyssey
python3 manage.py migrate
python3 manage.py createsuperuser
```
Note : you might have to use python instead of python3

9. Then create a superuser by filling the required details ( username , email , password )

10. then run the command
```
python3 manage.py runserver
```

11. then go to localhost:8000/admin on a browser 

12. Then click on social applications ( in the bottom left ).  Click on add in front of it

14. Then fill the form that opens up

Select provider as GitHub
Fill any name of your choice
Add Client id ( same as added in .env.local in step 3 , you can see it by doing cat .env.local in /odyssey/frontend )
Add Secret key ( same as added in .env.local in step 3 , you can see it by doing cat .env.local in /odyssey/frontend )

15. Then click on example.com and click on the right shift arrow

16. Click on save in the bottom right

17. Now, go back to the first terminal and make sure you are in odyssey/frontend

then run

```
npm i && npm run dev
```

18. goto localhost:3000 in a browser


