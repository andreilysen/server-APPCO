const { Schema, model, SchemaTypes } = require("mongoose");
// const mongoosePaginate = require("mongoose-paginate-v2");

const blockSchema = new Schema(
  {
    number: {
      type: SchemaTypes.String,
      required: [true],
    },
    timestamp: {
      type: SchemaTypes.String,
      required: [true],
    },
    transactions: {
      type: SchemaTypes.Array,
    },
  }
  //   {
  //     versionKey: false,
  //     timestamps: true,
  //     toJSON: {
  //       virtuals: true,
  //       transform: function (doc, ret) {
  //         delete ret._id;
  //         return ret;
  //       },
  //     },
  //     toObject: { virtuals: true },
  //   }
);

// contactSchema.plugin(mongoosePaginate);

const Block = model("block", blockSchema);

module.exports = Block;
