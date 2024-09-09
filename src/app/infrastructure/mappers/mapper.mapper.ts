export abstract class Mapper<I, O> {
  abstract mapTo(obj: any): O;
}
