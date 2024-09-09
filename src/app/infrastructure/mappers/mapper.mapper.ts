export abstract class Mapper<I, O> {
  abstract mapTo(obj: I): O;
  abstract mapFrom(obj: O): I;
}
