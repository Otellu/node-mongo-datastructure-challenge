const request = require("supertest");
const app = require("../app");
const User = require("../models/User");
const Group = require("../models/Group");

describe("Group endpoints", () => {
  it("creates a group", async () => {
    const res = await request(app).post("/groups").send({
      name: "Test Group",
      description: "A test group",
    });

    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe("Test Group");
  });

  it("adds a user to a group", async () => {
    const user = await User.create({
      name: "John Doe",
      email: "john@example.com",
    });
    const group = await Group.create({
      name: "Dev Group",
      description: "For devs",
    });

    const res = await request(app).post(`/groups/${group._id}/join`).send({
      userId: user._id,
    });

    expect(res.statusCode).toBe(200);
    const updatedGroup = await Group.findById(group._id);
    expect(updatedGroup.members).toContainEqual(user._id);
  });
});
