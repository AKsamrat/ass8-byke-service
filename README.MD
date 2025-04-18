## <code style="color:green"> Project Name: Bike Service</code>


### <code style="color:aqua">Tech Stack  :</code>
1.Node js <br>
2.Express <br>
3.Prisma <br>
4.TypeScript <br>
5.PostgreSQL <br>


Live Link:
```bash
https://bikeservice-blond.vercel.app
```
### <code style="color:aqua">Features  :</code>

- I use typescript ,nodejs,express , prisma,postgreSQL in this project.
- I covered all CRUD operation in this project(like creat,get all product,get single product, update a product, delete a product)
- Three different database collection implemented in this project(customer,bike and service) and also meke one to one relation
- Use some validation like email, enum type category 
- Use some query middleware
- Zod Validation has been implemented in this project.

## <code style="color:green"> Project setup</code>

Step 1:
Clone the project git link

Step 2:

```bash
npm install
```

Step 3:
Add your .env file to the project like this
```bash
DATABASE_URL="postgresql://Username:pass@localhost:5432/byke_service?schema=public"

```

Step 4:Run the project
```bash
npm run dev
```
Step 5:For showing table
```bash
npx prisma studio
```