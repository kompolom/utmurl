import { UrlGenerator } from "./UrlGenerator";

describe("build", () => {
  it("should add utm_source", () => {
    const url = new UrlGenerator("https://example.com/test").build({
      utm_source: "google",
    });
    expect(url).toBe("https://example.com/test?utm_source=google");
  });

  it("should add multiple utm", () => {
    const url = new UrlGenerator("https://example.com/test").build({
      utm_source: "google",
      utm_medium: "email",
    });
    expect(url).toBe(
      "https://example.com/test?utm_source=google&utm_medium=email"
    );
  });
  it("should not add empty value", () => {
    const url = new UrlGenerator("https://example.com/test").build({
      utm_source: "",
    });
    expect(url).toBe("https://example.com/test");
  });

  it("should build url without protocol", () => {
    expect(
      new UrlGenerator("example.com").build({ utm_source: "google" })
    ).toBe("https://example.com/?utm_source=google");
    expect(
      new UrlGenerator("//example.com").build({ utm_source: "google" })
    ).toBe("https://example.com/?utm_source=google");
    expect(
      new UrlGenerator("http://example.com").build({ utm_source: "google" })
    ).toBe("http://example.com/?utm_source=google");
  });

  it("should translit non ascii letters", () => {
    expect(
      new UrlGenerator("http://example.com").build({ utm_source: "яндекс" })
    ).toBe("http://example.com/?utm_source=yandex");
  });

  it("should keep dynamic values {}", () => {
    expect(
      new UrlGenerator("http://example.com").build({
        utm_campaign: "{campaign}",
        utm_id: "{id}",
      })
    ).toBe("http://example.com/?utm_campaign={campaign}&utm_id={id}");
  });
});
