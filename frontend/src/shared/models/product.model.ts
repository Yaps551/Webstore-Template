export class Product {
    _id: string;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt:Date;


  constructor(
    _id: string, 
    name: string, 
    description: string, 
    createdAt: Date, 
    updatedAt: Date
) {
    this._id = _id
    this.name = name
    this.description = description
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }

}

